# [FidelityFog](https://fidelityfog.herokuapp.com)

FidelityFog is a fullstack clone of the social music platform SoundCloud. My goal has been to recreate all of the core features and functionality of one of my favorite apps while also updating and improving on the techonolgies used by SoundCloud. 

## Technologies

* React
* Redux
* Ruby on Rails
* PostgreSQL
* AWS
* Heroku

## Features

### User Authorization
A user can create a free, secure account that they can use to upload and share their music with the entire community. If a user does not wish to create an account, they may try out all the other fun features by simply clicking either the "Sign in" or "Create account" buttons, then clicking on the "Demo login" button at the top of the form.

### User Track Functionality
A user may upload a song to FidelityFog. A user may also edit the details of the song any time after uploading. Along with users being able to play their own songs, a user may also listen to any public songs from other users simply by clicking the play button for any song. Finally, a user may delete any track that belongs to them.

### Persistant Track Bar
While navigating the app, a user may choose to play a song. The current track will be displayed on the bar at the bottom. From this bar, the user will have access to track controls, so that they may continue to browse while enjoying their tunes!


Some interesting problems arose around implementing both the track progress bar and the volume adjuster.

There are dedicated functions for calculating and displaying both the current and total time of the song, but how to keep the stats updating to the screen during playback? If you guessed a setInterval, you are correct!

```javascript
if (!this.interval) {
  this.interval = setInterval(() => {
    const percentage = (audio.currentTime / audio.duration) * 100
    this.setState({
      width: percentage,
      startTime: this.currentTime(audio),
      endTime: this.totalTime(audio)
    })
  }, 1000)
}
```
With this, we set the interval to update the progress and feed our frontend a width that it uses to set the container that is the bar representing the time elapsed.

Another fun problem came while trying to add a listener for the volume. The idea is that if you click higher on the bar, you will increase the volume. Lower and you decrease. But since the screen is measured from top to bottom, I had to do a little fancy footwork to get that result.

```javascript
handleVolumeClick(e) {
    const audio = this.ref.current
    if (audio.volume) {
      const percentage = Math.floor((e.nativeEvent.offsetY / -80) * 100) / 100 + 100 / 100
      audio.volume = percentage
    }
  }
```