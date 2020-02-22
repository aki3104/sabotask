Rails.application.routes.draw do
  root to: 'home#index'
  resources :users do
    resources :tasks
  end
end
