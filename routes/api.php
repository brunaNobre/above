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


// CHARTS

Route::middleware('auth:api')->get('/charts', function () {

    $charts = Chart::all();
    return $charts;
});

// FEELLINGS

Route::middleware('auth:api')->get('/feellings', function () {
    $feellings = Feelling::all();
    return $feellings;
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

Route::middleware('auth:api')->get('/user-feellings-new-aries', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'aries')->get();
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

Route::middleware('auth:api')->get('/user-feellings-new-taurus', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'taurus')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-gemini', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'gemini')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-cancer', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'cancer')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-leo', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'leo')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-virgo', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'virgo')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-libra', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'libra')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-scorpio', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'scorpio')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-sagitarius', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'sagitarius')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-capricorn', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'capricorn')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-aquarius', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'aquarius')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-new-pisces', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'new')->where('moon_sign', 'pisces')->get();
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


Route::middleware('auth:api')->get('/user-feellings-waxing-aries', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'aries')->get();
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

Route::middleware('auth:api')->get('/user-feellings-waxing-taurus', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'taurus')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-gemini', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'gemini')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-cancer', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'cancer')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-leo', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'leo')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-virgo', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'virgo')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-libra', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'libra')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-scorpio', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'scorpio')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-sagitarius', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'sagitarius')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-capricorn', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'capricorn')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-aquarius', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'aquarius')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waxing-pisces', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waxing')->where('moon_sign', 'pisces')->get();
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

Route::middleware('auth:api')->get('/user-feellings-full-aries', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'aries')->get();
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

Route::middleware('auth:api')->get('/user-feellings-full-taurus', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'taurus')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-gemini', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'gemini')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-cancer', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'cancer')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-leo', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'leo')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-virgo', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'virgo')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-libra', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'libra')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-scorpio', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'scorpio')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-sagitarius', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'sagitarius')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-capricorn', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'capricorn')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-aquarius', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'aquarius')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-full-pisces', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'full')->where('moon_sign', 'pisces')->get();
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

Route::middleware('auth:api')->get('/user-feellings-waning-aries', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'aries')->get();
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

Route::middleware('auth:api')->get('/user-feellings-waning-taurus', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'taurus')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-gemini', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'gemini')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-cancer', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'cancer')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-leo', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'leo')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-virgo', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'virgo')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-libra', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'libra')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-scorpio', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'scorpio')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-sagitarius', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'sagitarius')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-capricorn', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'capricorn')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-aquarius', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'aquarius')->get();
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
    
});Route::middleware('auth:api')->get('/user-feellings-waning-pisces', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->where('moon_phase', 'waning')->where('moon_sign', 'pisces')->get();
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
