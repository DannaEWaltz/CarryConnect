class IpsController < ApplicationController
  before_action :set_ip, only: [:show, :update, :destroy]

  # GET /ips
  def index
    @ips = Ip.all

    render json: @ips
  end

  # GET /ips/1
  def show
    render json: @ip
  end

  # POST /ips
  def create
    @ip = Ip.new(ip_params)

    if @ip.save
      render json: @ip, status: :created, location: @ip
    else
      render json: @ip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ips/1
  def update
    if @ip.update(ip_params)
      render json: @ip
    else
      render json: @ip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ips/1
  def destroy
    @ip.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ip
      @ip = Ip.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ip_params
      params.require(:ip).permit(:name, :email, :password_digest)
    end
end
