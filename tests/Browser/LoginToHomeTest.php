<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;


class LoginToHomeTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testHomeLogin()
    {
        $user = factory(User::class)->create();


        $this->browse(function ($browser) use ($user) {


            $browser->visit('login')
            ->type('email', $user->email)
            ->type('password', 'password')
            ->press('Entrar')
            ->assertPathIs('/home');
                  
        });

        $user->delete();


    }

    public function testAdminLoginWithNoExistingUser() {


        $this->browse(function ($browser) {


            $browser->visit('login')
            ->type('email', 'fake@email.com')
            ->type('password', 'fakepassword')
            ->press('Entrar')
            ->assertPathIsNot('/home');
                  
        });

    }
}
