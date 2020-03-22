class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      render json: user, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :internal_server_error
    end
  end

  def destroy
    log_out
    redirect_to root
  end
end
