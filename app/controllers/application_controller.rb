class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize, :authenticate_user

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  
  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end
  
  def authenticate_user
    render json: { error: "Not logged in" }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found(exception)
    render json: { errors: exception.errors.full_messages }, status: :render_not_found
  end

end
