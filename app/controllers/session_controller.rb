class SessionController < ApplicationController
    skip_before_action :authorize, :authenticate_user, only: :create

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      session[:expire_after] = Time.current + 15.minutes
      p session
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  def reset_session
    p session 
    @_request.reset_session
    p session
  end
end
