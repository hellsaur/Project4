Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post "/login"  => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/profile" =>  "lenders#profile"
  get "/profile" =>  "renters#profile"
  resources :lenders
  resources :renters
  resources :bikes
end
