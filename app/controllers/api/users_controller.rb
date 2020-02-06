class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create 
    @user = User.new(user_params)
    debugger
    if @user.save
      debugger 
      render :show
    else
      debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
