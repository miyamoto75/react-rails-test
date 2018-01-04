require 'test_helper'

class Api::V1::GetControllerTest < ActionDispatch::IntegrationTest
  test "should get clients" do
    get api_v1_get_clients_url
    assert_response :success
  end

end
