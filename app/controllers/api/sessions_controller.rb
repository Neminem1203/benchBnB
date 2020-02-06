class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
      if @user 
        log_in!(@user)
        render "api/users/show"
      else
        render json: ['invalid credentials'], status: 401
      end
    end

    def destroy 
      if log_out!
        render json: {}
      else
        render json: ['Not logged in'], status: 404  
      end
    end

   
end
