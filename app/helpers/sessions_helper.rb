module SessionsHelper
  def log_in(user)
    session[:user_id] = user_id
  end
end