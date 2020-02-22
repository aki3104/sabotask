require 'rails_helper'

RSpec.describe "Users", type: :request do
  let(:current_user) { create(:user) }
  let(:params)       { attributes_for(:user) }

  describe '新規登録できる' do
    before do
      post('/api/v1/users', params: params)
    end

    it '200OKが返ってくる' do
      expect(response.status).to eq(200)
    end

    it 'レスポンスのidと最後に登録されたUserのidが一致する' do
      expect(JSON.parse(response.body)['data']['id']).to eq(User.last.id)
    end

    it 'レスポンスのemailと最後に登録されたUserのemailが一致する' do
      expect(JSON.parse(response.body)['data']['email']).to eq(User.last.email)
    end
  end
  
  describe 'ログインできる' do
    before do
      # sessions#createアクション実装後にURLを入れる
      post('<sessions#createのURLが入る>', params: params)
    end

    it '200OKが返ってくる' do
      expect(response.status).to eq(200)
    end

    it 'セッションに値が入る'
  end

  describe 'ログアウトできる' do
    before do
      delete('<sessions#destroyのURLが入る>', params: params)
    end

    it '200OKが返ってくる' do
      expect(response.status).to eq(200)
    end

    it 'セッションから値が削除される'
  end

  describe 'ユーザー削除ができる' do
    before do
      delete("/api/v1/users/#{current_user.id}")
    end

    it '200OKが返ってくる' do
      expect(response.status).to eq(200)
    end

    it 'User.lengthが1減る' do
      # 合ってるか自信ないです。
      expect(User.length).to change(User.length).by(-1)
    end
  end

end
