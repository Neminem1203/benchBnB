class Api::BenchesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @benches = Bench.in_bounds(params[:bounds])
    # @benches = Bench.all
    render :index
  end

  def create
    @bench = Bench.create(coords)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages
    end
  end

  private
  def coords
    params.require(:bench).permit(:description, :seats, :lat, :lng)
  end
end
