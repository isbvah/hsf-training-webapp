# hsf-training-webapp

Goals To achieve--
----------------------------------------------

Basics

    The index page of your website should contain the list of the training modules
    For each training module, the following should be displayed:
        Title (name field)
        Description
        A link to the repository
        A link to its rendered webpage
        A link to the video playlist (if present)

Filtering

Add filtering capabilities for one of these (you can do all if you still have time left over):

    status: stable/beta/alpha dropdown
    videos: available or not checkbox


Simple stretch goals

Optional: Add (one/some of) these if you have time:

    Add a field hero-image to each module and show an image next to the training module (similar to how it’s done on learn.astropy)
    Add a simple visual cue based on the status of the module (could be an icon, a choice of color, …)
    Add alt-texts to the filtering menus from the previous list of tasks

You don’t need to go crazy with the formatting, but it’s good to see that you know some CSS.
Slightly more involved stretch goals

Very optional if you still have time:
Curricula

    Add a new drop down menu “Curriculum”
    Each of the items in the curriculum drop down corresponds to a list of training modules with specified order.
    After selecting one of the curricula from the drop-down, exactly these training modules should be listed
    For example, “Software basics” might list exactly the modules from the “Basics” section of our current training center (“The Unix Shell”, “Version controlling with git”, …)
    Think about how these different curricula could be configured (e.g., with another .yaml file etc.) and implement it



