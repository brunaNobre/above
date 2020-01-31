<?php

use Illuminate\Http\Request;
use App\Chart;
use App\Mood;
use App\Moon;
use App\Planet;
use App\Sign;
use App\Task;
use App\User;
use App\Feelling;
use App\FeellingMood;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// middleware('auth:api')->

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return auth()->user();
});

Route::middleware('auth:api')->post('/user/image', function (Request $request) {
    $id = auth()->user()->id;    
    
    $imageName = $id.'.'.request()->user_image->getClientOriginalExtension();

    request()->user_image->move(public_path('images/users'), $imageName);

    return back()
        ->with('success','Imagem enviada com sucesso.')
        ->with('image',$imageName);

});

Route::middleware('auth:api')->get('/planets', function () {

    $planets = Planet::all();
    return $planets;
});


Route::middleware('auth:api')->get('/moons', function () {

    $moons = Moon::all();
    return $moons;
});


Route::middleware('auth:api')->get('/signs', function () {

    $signs = Sign::all();
    return $signs;
});

// TASKS

Route::middleware('auth:api')->get('/tasks', function () {
    $tasks = Task::all();
    return $tasks;
});


Route::middleware('auth:api')->put('tasks/{id}', function(Request $request, $id) {
    $tasks = Task::findOrFail($id);
    $tasks->update($request->all());
    return $tasks;
});


Route::middleware('auth:api')->post('/tasks', function(Request $request) {
    return Task::create($request->all());
});

Route::middleware('auth:api')->delete('tasks/{id}', function($id) {
    Task::find($id)->delete();
    return 204;
});


// CHART

Route::middleware('auth:api')->get('/chart', function () {
    $user_id = auth()->user()->id;
    $user_chart = Chart::where('user_id',$user_id)->get();

    if(count($user_chart) > 0) {
        return $user_chart[0];
    } else {
        return -1;
    }
});



Route::middleware('auth:api')->post('/chart', function (Request $request) {
    $user_id = auth()->user()->id;
    $charts = Chart::where('user_id',$user_id)->get();

    if(count($charts) == 0) {
        $chart = Chart::create(
            [
                "user_id" => $user_id,
                "sun" => $request->sun,
                "rising_sign" => $request->rising_sign,
                "moon" => $request->moon,
                "mercury" => $request->mercury,
                "venus" => $request->venus,
                "mars" => $request->mars,
                "jupiter" => $request->jupiter,
                "saturn" => $request->saturn,
                "uranus" => $request->uranus,
                "neptune" => $request->neptune,
                "pluto" => $request->pluto,
                "mc" => $request->mc,
    
            ]
            );
    } else {
        $chart = "user chart exists";
    }


        return $chart;
});

// FEELLINGS

Route::middleware('auth:api')->get('/feellings', function () {
    $feellings = Feelling::all();
    return $feellings;
});

Route::middleware('auth:api')->get('/moods', function () {
    $moods = Mood::all();
    return $moods;
});

Route::middleware('auth:api')->get('/user-moods', function () {
    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->get();
    return $moods;
});


// Add new feelling to the user mood
Route::middleware('auth:api')->post('/moods', function(Request $request) {
    $user_id = auth()->user()->id;
    $feelling = $request->feelling;
    $feelling_id = Feelling::where('name', $feelling)->get()[0]->id;
    
    //returns an array with 0 or more objects (instead of a instance of the object)
    $mood = Mood::where('user_id',$user_id)->where('day', $request->day)->get();

    //if mood already exists in this date with this user: just attach the feelling
    if(count($mood) > 0) {
            // if feelling to attach already exists in mood: don't attach
            $hasFeelling = false;
            $feellings = $mood[0]->feellings()->get();
            foreach ($feellings as $f) {
                if($f->pivot->feelling_id == $feelling_id) {
                    $hasFeelling = true;
                    break;
                }
            }
            if($hasFeelling) {
                return "feelling already exists";
            } else {
                return $mood[0]->feellings()->attach([$feelling_id]);
            }
    } else {
        $mood = Mood::create(
            [
                "user_id" => $user_id,
                "day" => $request->day,
                "moon_phase" => $request->moon_phase,
                "moon_sign" => $request->moon_sign,
   
            ]
            );
           return  $mood->feellings()->attach([$feelling_id]);;
    }
  
});


// Feellings that the auth user registered on current day
Route::middleware('auth:api')->get('/day-feellings', function(Request $request) {
    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)
    ->where('day', $request->all())
    ->get();

    if(count($moods) > 0) {
        foreach ($moods as $mood) {
            $feellings = $mood->feellings()->get();
         }
     
         return $feellings; 
    }

    return [];          
    
});

Route::middleware('auth:api')->get('/user-feellings', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->get();
    $feellingsList = array();
    $feellings = array();




    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});


Route::middleware('auth:api')->get('/user-feellings-new', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});



Route::middleware('auth:api')->get('/user-feellings-waxing', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});




Route::middleware('auth:api')->get('/user-feellings-full', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});



Route::middleware('auth:api')->get('/user-feellings-waning', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});




// ROUTES FOR COMPARISON

// Get all feellings in the new moon

Route::middleware('auth:api')->get('/feellings-new', function() {

    $moods = Mood::where('moon_phase', 'new')->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});

// Get all feellings in the waxing moon

Route::middleware('auth:api')->get('/feellings-waxing', function() {

    $moods = Mood::where('moon_phase', 'waxing')->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});

// Get all feellings in the full moon

Route::middleware('auth:api')->get('/feellings-full', function() {

    $moods = Mood::where('moon_phase', 'full')->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});


// Get all feellings in the waning moon

Route::middleware('auth:api')->get('/feellings-waning', function() {

    $moods = Mood::where('moon_phase', 'waning')->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});
