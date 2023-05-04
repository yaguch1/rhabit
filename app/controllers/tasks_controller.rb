class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:create]

  def index
    gon.userid = current_user.id
    
    @tasks = Task.where(user_id: current_user.id)
    @task = params[:task]
  end

  def create
    @task = Task.new(task_params)
    @task.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json{ render json: @task }
      end
  end

  def destroy
    @task = Task.find(params[:id])
    @task_id = @task.id
    @task.destroy
    respond_to do |format|
      format.js
    end
  end

  private
  def task_params
    params.permit(:task_name, :user_id)
  end

end

