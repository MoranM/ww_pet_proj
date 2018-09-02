Rails.application.routes.draw do
  resources :cuisines
  root 'pages#index', as: 'pages_index'

  resources :reviews
  resources :restaurants
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
