class JourneysController < ApplicationController
  before_action :set_journey, only: [:show, :update, :destroy]

  # GET /journeys
  def index
    @journeys = Journey.all

    render json: @journeys
  end

  # GET /journeys/1
  def show
    render json: @journey
  end

  # POST /journeys
  def create
    @journey = Journey.new(journey_params)

    if @journey.save
      render json: @journey, status: :created, location: @journey
    else
      render json: @journey.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /journeys/1
  def update
    if @journey.update(journey_params)
      render json: @journey
    else
      render json: @journey.errors, status: :unprocessable_entity
    end
  end

  # DELETE /journeys/1
  def destroy
    @journey.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_journey
      @journey = Journey.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def journey_params
      params.require(:journey).permit(:date, :milestone, :medication, :test_result, :ip_id, :gc_id)
    end
end
