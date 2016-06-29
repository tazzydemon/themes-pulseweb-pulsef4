silverstripe-squandered-theme
=============================

A continuous work in progress.

Built for 3.1 but should be fine 3.*

Screenshots
--------------
**Login**
![alt tag](https://dl.dropboxusercontent.com/u/5616402/Internet%20Posts/github/login.jpg)

**Home page, with latest blog posts**
![alt tag](https://dl.dropboxusercontent.com/u/5616402/Internet%20Posts/github/home.jpg)

**Blog Holder**
![alt tag](https://dl.dropboxusercontent.com/u/5616402/Internet%20Posts/github/blog.jpg)

**Comments**
![alt tag](https://dl.dropboxusercontent.com/u/5616402/Internet%20Posts/github/comments.jpg)

Custome code
--------------
To display blogs on the homepage, create a new php file in mysite/code called HomePage.php and add the following code.
```php
<?php
class HomePage extends Page
{

}
class HomePage_Controller extends Page_Controller
{
    public function LatestBlog()
    {
        return DataObject::get('BlogEntry', '', 'Date DESC', '', 5);
    }
}
```
Then with the CMS change the page type of your homepage to be HomePage. 

To enable gravatar icons for the comments, added the following to /mysite/_config.php
```php
Commenting::set_config_value('SiteTree', 'use_gravatar', true);
```
