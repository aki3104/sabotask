module UsersHelper
  def downcase_email(params)
    params[:email].downcase
    params
  end
end