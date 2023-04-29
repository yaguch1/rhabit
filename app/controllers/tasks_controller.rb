class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:create]

  def index
    @tasks = Task.all
    @task = params[:task]
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.js
      end
    else
    end
  end

  private
  def task_params
    params.permit(:task_name)
  end

end

