class ApplicationController < ActionController::Base

  def current_user 

    @current_user ||= User.find_by(session_token: session[:session_token])
  
  end

  def log_in!(user)
    session[:session_token] = user.session_token
  end

  def log_out!
    return false unless current_user
    session[:session_token] = nil
    current_user.reset_session_token!
    return true
  end


end
