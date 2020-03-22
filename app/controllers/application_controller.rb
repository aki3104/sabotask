class ApplicationController < ActionController::Base
  include SessionsHelper
  before_action :current_user
end
