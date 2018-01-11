Rails.application.routes.draw do
  get 'vue/index'

  get 'ng/index'

  namespace :api do
    namespace :v1 do
      get 'clients/get'
    end
  end

  # react
  get 'react/ajax', to: 'test#ajax'
  get 'react/index', to: 'test#index'
  get 'react/form', to: 'test#form'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
