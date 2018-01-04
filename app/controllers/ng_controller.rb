class NgController < ApplicationController
  def index
    @clients = [
      {id: 10, name: "a", pref: "H"},
      {id: 20, name: "b", pref: "O"},
      {id: 30, name: "c", pref: "O"},
    ];
  end
end
