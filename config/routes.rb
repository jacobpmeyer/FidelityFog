Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tracks do 
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy]
  end

end
