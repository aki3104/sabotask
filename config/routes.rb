Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'sessions/create'
      get 'sessions/destroy'
    end
  end
  root to: 'home#index'

  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :users do
        resources :tasks
      end
    end
  end
end
