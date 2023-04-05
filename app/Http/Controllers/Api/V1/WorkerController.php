<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Worker;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWorkerRequest;
use App\Http\Resources\V1\WorkerResource;
use App\Http\Requests\UpdateWorkerRequest;
use App\Http\Resources\V1\WorkerCollection;

class WorkerController extends Controller
{
    public function index()
    {
        return new WorkerCollection(Worker::paginate(10));
    }

    public function show(Worker $worker)
    {
        return new WorkerResource($worker);
    }

    public function store(StoreWorkerRequest $request)
    {
        Worker::create($request->validated());
        return response()->json("worker created");
    }

    public function addSalary(StoreWorkerRequest $request, Worker $worker){
        return response()->json("worker added salary");
    }

    public function update(UpdateWorkerRequest $request, Worker $worker)
    {
        $worker->update($request->validated());
        return response()->json("worker updated");
    }

    public function destroy(Worker $worker)
    {
        $worker->delete();
        return response()->json("worker deleted");
    }
}
