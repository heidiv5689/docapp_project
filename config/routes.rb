Rails.application.routes.draw do
  
  namespace :api do
    resources :doctors do 
      resources :appointments
      get '/unenrolled', to: 'appointments#unenrolledUsers'
      get '/enrolled', to: 'appointments#enrolledUsers'
      get '/doctorUsers', to: 'doctors#doctorUsers'
    end

    resources :users do
    get '/userDoctors', to: 'users#userDoctors'
    end
  end
end
