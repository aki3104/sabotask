class HomeController < ApplicationController
  def index
  end

  def redirect_to_root
    redirect_to root
  end
end
