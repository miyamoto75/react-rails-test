require 'test_helper'

class Api::V1::ClientsControllerTest < ActionDispatch::IntegrationTest
  test "should get get" do
    get api_v1_clients_get_url
    assert_response :success
  end

end
