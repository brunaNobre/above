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
        $user = User::find(18);


        $this->browse(function ($browser) use ($user) {


            $browser->visit('/login')
            ->pause(2000)
            ->type('email', $user->email)
            ->pause(2000)
            ->type('password', '1qwertyu')
            ->pause(2000)
            ->press('Entrar')
            ->pause(2000)
            ->assertPathIs('/home')
            ->pause(2000)
            ->clickLink('Usuário ')
            ->pause(2000)
            ->clickLink('Logout')
            ->pause(2000);
                  
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
