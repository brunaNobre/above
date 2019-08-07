<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class LoginToHomeTest extends DuskTestCase
{

    use DatabaseMigrations;


    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testLogin()
    {
        $user = factory(User::class)->create([
            'email' => 'joana@laravel.com',
        ]);


        $this->browse(function ($browser) use ($user) {


            $browser->visit('/login')
            ->type('email', $user->email)
            ->type('password', 'password')
            ->press('Entrar')
            ->assertPathIs('/home');
                  
        });
    }
}
