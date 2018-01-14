require 'test_helper'

class Ng2ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ng2_index_url
    assert_response :success
  end

end
