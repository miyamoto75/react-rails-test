Rails.application.routes.draw do
  get 'vue/index'

  get 'ng/index'

  namespace :api do
    namespace :v1 do
      get 'clients/get'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'get/clients'
    end
  end

  get 'test/ajax'

  get 'test/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
