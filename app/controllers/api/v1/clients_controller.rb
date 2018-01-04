class Api::V1::ClientsController < ApplicationController
  def get
    c = {
      id: rand(100..9999999),
      name: (3...20).map{ (65 + rand(26)).chr }.join
    }

    render plain: c.to_json
  end
end
