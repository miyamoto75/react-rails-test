require 'test_helper'

class NgControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ng_index_url
    assert_response :success
  end

end
