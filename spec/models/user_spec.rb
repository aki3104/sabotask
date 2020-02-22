require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }

  describe 'ファクトリのテスト' do
    it '有効なファクトリを持つこと' do
      expect(user).to be_valid
    end
  end

  describe 'バリデーションのテスト' do
    it 'nameがなければエラーになる' do
      user = build(:user, name: nil)
      expect(user.save).to be_falsey
    end

    it 'emailがなければエラーになる' do
      user = build(:user, email: nil)
      expect(user.save).to be_falsey
    end

    it 'passwordがなければエラーになる' do
      user = build(:user, password: nil)
      expect(user.save).to be_falsey
    end
  end
end
