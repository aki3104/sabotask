class Api::V1::UsersController < ApplicationController
  include UsersHelper
  protect_from_forgery

  def index
  end

  def show
  end

  def create
    user = User.new(downcase_email(user_params))

    if user.save
      log_in user
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :internal_server_error
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: user, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :internal_server_error
    end
  end

  def destroy
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
