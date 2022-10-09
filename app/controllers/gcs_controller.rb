class GcsController < ApplicationController
  before_action :set_gc, only: [:show, :update, :destroy]

  # GET /gcs
  def index
    @gcs = Gc.all

    render json: @gcs
  end

  # GET /gcs/1
  def show
    render json: @gc
  end

  # POST /gcs
  def create
    @gc = Gc.new(gc_params)

    if @gc.save
      render json: @gc, status: :created, location: @gc
    else
      render json: @gc.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gcs/1
  def update
    if @gc.update(gc_params)
      render json: @gc
    else
      render json: @gc.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gcs/1
  def destroy
    @gc.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gc
      @gc = Gc.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def gc_params
      params.require(:gc).permit(:name, :email, :password_digest)
    end
end
