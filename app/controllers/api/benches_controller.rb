class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
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
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
