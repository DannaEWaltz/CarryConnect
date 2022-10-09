class InstancesController < ApplicationController
  before_action :set_instance, only: [:show, :update, :destroy]

  # GET /instances
  def index
    @instances = Instance.all

    render json: @instances
  end

  # GET /instances/1
  def show
    render json: @instance
  end

  # POST /instances
  def create
    @instance = Instance.new(instance_params)

    if @instance.save
      render json: @instance, status: :created, location: @instance
    else
      render json: @instance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /instances/1
  def update
    if @instance.update(instance_params)
      render json: @instance
    else
      render json: @instance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /instances/1
  def destroy
    @instance.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_instance
      @instance = Instance.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def instance_params
      params.require(:instance).permit(:date, :milestone, :medication, :test_result, :ip_id, :gc_id)
    end
end
