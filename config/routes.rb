Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      post 'login', to: 'sessions#create'
      delete 'logout', to: 'sessions#destroy'
    end
  end

  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :users do
        resources :tasks
        resources :goals
      end
    end
  end

  get '*path', to: 'home#redirect_to_root'
end
