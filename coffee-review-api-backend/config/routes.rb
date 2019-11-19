Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :roasts, only: [:index, :show]
      resources :roasters, only: [:index, :show, :create]
    end
  end
end
