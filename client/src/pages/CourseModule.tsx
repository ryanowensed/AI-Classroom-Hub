import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Copy } from "lucide-react";
import { getModuleById, getLessonByIds } from "@/data/courseData";
import { useState } from "react";
import { toast } from "sonner";
import ReactMarkdown from 'react-markdown';

export default function CourseModule() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const moduleId = parseInt(params.moduleId || "1");
  const lessonId = parseInt(new URLSearchParams(window.location.search).get("lesson") || "1");
  
  const module = getModuleById(moduleId);
  const currentLesson = getLessonByIds(moduleId, lessonId);
  
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  if (!module || !currentLesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Module or Lesson Not Found</h1>
          <Link href="/course">
            <Button>Back to Course</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const currentLessonIndex = module.lessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentLessonIndex > 0 ? module.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < module.lessons.length - 1 ? module.lessons[currentLessonIndex + 1] : null;
  const nextModule = moduleId < 5 ? moduleId + 1 : null;

  const handleLessonComplete = () => {
    const key = `${moduleId}-${lessonId}`;
    setCompletedLessons(prev => new Set(prev).add(key));
    toast.success("Lesson marked as complete!");
  };

  const handleCopyTemplate = () => {
    if (currentLesson.template) {
      navigator.clipboard.writeText(currentLesson.template);
      toast.success("Template copied to clipboard!");
    }
  };

  const navigateToLesson = (newLessonId: number) => {
    setLocation(`/course/module/${moduleId}?lesson=${newLessonId}`);
    window.scrollTo(0, 0);
  };

  const navigateToModule = (newModuleId: number) => {
    setLocation(`/course/module/${newModuleId}?lesson=1`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30">
        <div className="container py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/course">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Course
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Lesson Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-4">
                  <div className="mb-4">
                    <Badge className="mb-2">Module {moduleId}</Badge>
                    <h3 className="font-bold text-lg mb-1">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.subtitle}</p>
                  </div>

                  <div className="space-y-2">
                    {module.lessons.map((lesson, index) => {
                      const isActive = lesson.id === lessonId;
                      const isCompleted = completedLessons.has(`${moduleId}-${lesson.id}`);
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => navigateToLesson(lesson.id)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-0.5">
                              {isCompleted ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                              ) : (
                                <div className={`h-4 w-4 rounded-full border-2 ${
                                  isActive ? "border-primary-foreground" : "border-muted-foreground"
                                }`} />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium mb-1">
                                Lesson {index + 1}: {lesson.title}
                              </div>
                              <div className="flex items-center gap-1 text-xs opacity-80">
                                <Clock className="h-3 w-3" />
                                {lesson.duration}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  {/* Lesson Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">
                        Lesson {currentLessonIndex + 1} of {module.lessons.length}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {currentLesson.duration}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{currentLesson.title}</h1>
                  </div>

                  {/* Lesson Content */}
                  <div className="prose prose-slate max-w-none mb-8">
                    <ReactMarkdown>{currentLesson.content}</ReactMarkdown>
                  </div>

                  {/* Template Section */}
                  {currentLesson.template && (
                    <Card className="bg-muted/50 mb-8">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">📋 Copy-Paste Template</h3>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={handleCopyTemplate}
                            className="gap-2"
                          >
                            <Copy className="h-4 w-4" />
                            Copy Template
                          </Button>
                        </div>
                        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm border">
                          <code>{currentLesson.template}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div>
                      {prevLesson ? (
                        <Button
                          variant="outline"
                          onClick={() => navigateToLesson(prevLesson.id)}
                          className="gap-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Previous: {prevLesson.title}
                        </Button>
                      ) : (
                        <div />
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={handleLessonComplete}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Mark Complete
                      </Button>

                      {nextLesson ? (
                        <Button
                          onClick={() => navigateToLesson(nextLesson.id)}
                          className="gap-2"
                        >
                          Next: {nextLesson.title}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      ) : nextModule ? (
                        <Button
                          onClick={() => navigateToModule(nextModule)}
                          className="gap-2"
                        >
                          Next Module
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Link href="/course">
                          <Button className="gap-2">
                            Back to Course
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
