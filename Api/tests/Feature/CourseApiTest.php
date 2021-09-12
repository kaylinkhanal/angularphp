<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Course;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CourseApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_api_that_course_can_be_created(): void
    {
        Course::factory(['title' => 'My title'])->create();

        $this->assertDatabaseHas('courses', ['title' => 'My title']);

        $this->assertCount(1, Course::all());
    }

    public function test_api_that_course_can_be_deleted(): void
    {
        $course = Course::factory()->create()->first();

        $course->delete('/api/courses/' . $course->id);

        $this->assertCount(0, Course::all());
    }

    public function test_api_that_course_can_be_updated_api(): void
    {
        $course = Course::factory()->create()->first();

        $this->patchJson('/api/courses/' . $course->id, [
            'title' => 'test course title updated',
            'description' => 'some long text updated here',
            'percentComplete' => 10,
            'favorite' => true,

        ])->assertStatus(200);

        $this->assertNotEquals($course->title, Course::first()->title);
        $this->assertEquals('test course title updated', Course::first()->title);

        $this->assertCount(1, Course::all());
    }

    public function test_api_that_show_course_is_working(): void
    {
        Course::factory()->create();
        $this->getJson('/api/courses/' . Course::first()->id)-> assertStatus(200);
    }
}
