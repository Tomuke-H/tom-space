Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'things', to: 'things#index'
    get 'users', to: 'users#index'
    get 'friends', to: 'users#friends'
    put 'add_friend/:id', to: 'users#add_friend'
    put 'remove_friend/:id', to: 'users#remove_friend'
    resources :posts do
      resources :comments
    end
  end
  
end
