<?php

namespace App\Http\Controllers\Api;

use App\Models\Course;
use App\Http\Controllers\Controller;
use App\Http\Requests\CourseApiRequest;
use App\Http\Resources\CourseResource;

class CourseApiController extends Controller
{
    public function index()
    {
        return CourseResource::collection(Course::all());
    }

    public function store(CourseApiRequest $request)
    {
        Course::create($request->validated());

        return response()->json(['message' => 'Course Created Successfully !!'], 201);
    }

    public function show(Course $course)
    {
        return response()->json(new CourseResource($course));
    }

    public function update(CourseApiRequest $request, Course $course)
    {
        $course->update($request->validated());

        return response()->json(['message' => 'Course Updated Successfully !!'], 200);
    }

    public function destroy(Course $course)
    {
        $course->delete();

        return response()->json(['message' => 'Course deleted Successfully !!'], 200);

    }
}
