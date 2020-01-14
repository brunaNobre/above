<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
//use Illuminate\Foundation\Testing\RefreshDatabase;



class LoginToHomeTest extends DuskTestCase
{

    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testHomeLogin()
    {


        $this->browse(function ($browser) {


            $browser->visit('/login')
            ->type('email', 'usuaria@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')
            ->assertPathIs('/home')
            ->click('.abv-logout-menu-wrapper')
            ->clickLink('Sair');
                  
        });



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
