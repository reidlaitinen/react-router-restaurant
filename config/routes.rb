Rails.application.routes.draw do

  # get '/api/menus/:id', to: 'api/menus#index'
  # get '/api/items/:id', to: 'api/items#index'
  namespace :api do
    resources :menus
    resources :items
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end