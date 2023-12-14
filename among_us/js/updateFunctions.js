function update() {
    // Basic camera movement with WASD keys
    if (cursors && cursors.left.isDown) {
        this.cameras.main.scrollX -= cameraSpeed;
    } else if (cursors && cursors.right.isDown) {
        this.cameras.main.scrollX += cameraSpeed;
    }
    if (cursors && cursors.up.isDown) {
        this.cameras.main.scrollY -= cameraSpeed;
    } else if (cursors && cursors.down.isDown) {
        this.cameras.main.scrollY += cameraSpeed;
    }
}