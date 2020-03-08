class Api::V1::UsersController < ApplicationController
  protect_from_forgery

  def index
  end

  def show
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :internal_server_error
    end
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.permit(:name, :email, :password)
  end
end
